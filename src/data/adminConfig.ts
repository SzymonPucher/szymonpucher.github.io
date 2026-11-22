export const DEFAULT_ADMIN_EMAILS = [
	'sajmontube@gmail.com',
	'sajmontube+github@gmail.com',
	'spucher@interia.eu',
];

export function getAllowedAdminEmails(): string[] {
	const envEmails = import.meta.env.PUBLIC_ADMIN_EMAILS;
	if (envEmails) {
		const list = envEmails
			.split(',')
			.map((e: string) => e.trim().toLowerCase())
			.filter(Boolean);
		if (list.length > 0) {
			return Array.from(new Set([...list, ...DEFAULT_ADMIN_EMAILS.map((e) => e.toLowerCase())]));
		}
	}
	return DEFAULT_ADMIN_EMAILS.map((e) => e.toLowerCase());
}
