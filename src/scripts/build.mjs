// Build each language from template + locale JSON into /docs/{lang}/index.html
import fs from "node:fs";
import path from "node:path";

const locales = ["en", "es", "fr"];
const year = new Date().getFullYear();


/**
 * Resolve a dotted path in an object, e.g. "nav.presentation.title"
 * Returns "" if not found (to avoid 'undefined' in HTML).
 */
function getByPath(obj, path) {
	if (!path) return "";
	const parts = path.split(".");
	let cur = obj;
	for (const p of parts) {
		if (cur && Object.prototype.hasOwnProperty.call(cur, p)) {
			cur = cur[p];
		} else {
			return "";
		}
	}
	return cur ?? "";
}

/**
 * Replace all {{ some.path }} with data from 'ctx'.
 * Supports nested paths of arbitrary depth.
 */
function replaceVariables(tpl, ctx) {
	return tpl.replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_, path) => {
		const v = getByPath(ctx, path);
		// Render primitives only; stringify objects/arrays defensively
		return (typeof v === "string" || typeof v === "number" || typeof v === "boolean")
			? String(v)
			: "";
	});
}

/**
 * Very small templating engine:
 * - {{ key }} or {{ deep.path.key }} variable replacement
 * - {{#each deep.path}} ... {{/each}} loops
 *   Inside each: use {{ this }} for primitive items or {{ this.someKey }} / {{ someKey }} for objects.
 */
function render(template, data) {
	let out = template;

	// First handle all #each blocks (outermost to innermost)
	// Regex: {{#each path}} ... {{/each}}
	out = out.replace(/\{\{\#each\s+([\w.]+)\}\}([\s\S]*?)\{\{\/each\}\}/g, (_, path, block) => {
		const list = getByPath(data, path);
		if (!Array.isArray(list) || list.length === 0) return "";

		return list.map(item => {
			// Build a child context so {{ key }} resolves on object items
			const childCtx = (item && typeof item === "object")
				? { ...item, this: item }
				: { this: item };

			// Replace variables within the block using the child context
			// Allow {{ this }} or {{ this.some }} or direct {{ some }} for object fields
			let rendered = replaceVariables(block, childCtx);

			// Also allow top-level fallbacks (e.g., keys that refer back to parent context)
			rendered = replaceVariables(rendered, data);

			return rendered;
		}).join("");
	});

	// Then replace remaining variables in the full template with the root data
	out = replaceVariables(out, data);

	return out;
}

fs.mkdirSync("docs/assets/files", { recursive: true });
fs.copyFileSync("files/favicon.ico", "docs/favicon.ico");
const cssFiles = ["main.css", "print.css", "pdf.css"];
for (const stylesheet of cssFiles) {
    fs.copyFileSync(`src/styles/${stylesheet}`, `docs/assets/${stylesheet}`);
}

const files = ["flag_ar.png", "flag_fr.png", "flag_en.png", "face.jpg"];
for (const filename of files) {
    fs.copyFileSync(`files/${filename}`, `docs/assets/files/${filename}`);
}

fs.mkdirSync("docs/assets/icons", { recursive: true });
const icons = ["address", "flag", "github", "home", "linkedin", "mail", "pdf", "phone", "print", "search"];
for (const icon of icons) {
    fs.copyFileSync(`files/icon-${icon}.svg`, `docs/assets/icons/${icon}.svg`);
}

const templates = ["index", "print"];
for (const templateFile of templates) {
    const template = fs.readFileSync(`src/templates/${templateFile}.html`, "utf8");

    for (const lang of locales) {
        const data = JSON.parse(fs.readFileSync(`locales/${lang}.json`, "utf8"));
        const html = render(template, {...data, year});
        const outDir = lang === "es"
            ? "docs"
            : `docs/${lang}`;
        fs.mkdirSync(outDir, {recursive: true});
        fs.writeFileSync(`${outDir}/${templateFile}.html`, html);
    }
    console.log(templateFile, "Built docs/*.html for es/en/fr");
}
