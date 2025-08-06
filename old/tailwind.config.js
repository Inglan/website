/** @type {import('tailwindcss').Config} */
module.exports = {
	theme: {
		extend: {
			typography: () => ({
				custom: {
					css: {
						'--tw-prose-body': 'var(--color-text)',
						'--tw-prose-headings': 'var(--color-primary)',
						'--tw-prose-lead': 'var(--color-text)',
						'--tw-prose-links': 'var(--color-primary)',
						'--tw-prose-bold': 'var(--color-text)',
						'--tw-prose-counters': 'var(--color-text)',
						'--tw-prose-bullets': 'var(--color-text)',
						'--tw-prose-hr': 'var(--color-text)',
						'--tw-prose-quotes': 'var(--color-text)',
						'--tw-prose-quote-borders': 'var(--color-text)',
						'--tw-prose-captions': 'var(--color-text)',
						'--tw-prose-code': 'var(--color-text)',
						'--tw-prose-pre-code': 'var(--color-text)',
						'--tw-prose-pre-bg': 'var(--color-text)',
						'--tw-prose-th-borders': 'var(--color-text)',
						'--tw-prose-td-borders': 'var(--color-text)'
					}
				}
			})
		}
	}
};
