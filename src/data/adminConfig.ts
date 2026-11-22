export const DEFAULT_ADMIN_EMAILS = [
	'sajmontube@gmail.com',
	'sajmontube+github@gmail.com',
	'spucher@interia.eu',
];

export const DEFAULT_GOOGLE_CLIENT_ID = '869604397100-4c37t9il1hub0ke4p0on2hhlsbhbgj9i.apps.googleusercontent.com';

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

export function getGoogleClientId(): string {
	return import.meta.env.PUBLIC_GOOGLE_CLIENT_ID || DEFAULT_GOOGLE_CLIENT_ID;
}
