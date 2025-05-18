
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#4CAF50',
					foreground: '#FFFFFF',
					hover: '#66BB6A',
					active: '#388E3C',
					disabled: '#A5D6A7'
				},
				secondary: {
					DEFAULT: '#FFC107',
					foreground: '#212121',
					hover: '#FFD54F',
					active: '#FFA000',
					disabled: '#FFE082'
				},
				accent: {
					DEFAULT: '#795548',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: '#F44336',
					foreground: '#FFFFFF'
				},
				muted: {
					DEFAULT: '#F5F5F5',
					foreground: '#757575'
				},
				success: {
					DEFAULT: '#43A047',
					foreground: '#FFFFFF'
				},
				warning: {
					DEFAULT: '#FF9800',
					foreground: '#212121'
				},
				info: {
					DEFAULT: '#2196F3',
					foreground: '#FFFFFF'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			fontFamily: {
				heading: ['"Roboto Slab"', 'serif'],
				body: ['"Open Sans"', 'sans-serif']
			},
			fontSize: {
				'h1': ['3rem', {
					lineHeight: '1.2',
					letterSpacing: '-0.02em',
					fontWeight: '700'
				}],
				'h2': ['2.25rem', {
					lineHeight: '1.3',
					letterSpacing: '-0.01em',
					fontWeight: '700'
				}],
				'h3': ['1.5rem', {
					lineHeight: '1.4',
					letterSpacing: '0',
					fontWeight: '600'
				}],
				'body': ['1rem', {
					lineHeight: '1.6',
					letterSpacing: '0.01em',
					fontWeight: '400'
				}],
				'small': ['0.875rem', {
					lineHeight: '1.5',
					letterSpacing: '0.02em',
					fontWeight: '400'
				}],
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in-up': {
					'0%': { 
						opacity: '0',
						transform: 'translateY(20px)'
					},
					'100%': { 
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'shrink-header': {
					'0%': { height: '80px' },
					'100%': { height: '60px' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in-up': 'fade-in-up 0.5s ease-out',
				'shrink-header': 'shrink-header 0.3s ease-out forwards'
			},
			boxShadow: {
				'button': '0 2px 4px rgba(0, 0, 0, 0.2)',
				'button-hover': '0 4px 8px rgba(0, 0, 0, 0.25)',
				'card': '0 2px 10px rgba(0, 0, 0, 0.1)'
			},
			spacing: {
				'2xs': '4px',
				'xs': '8px',
				'sm': '12px',
				'md': '16px',
				'lg': '24px',
				'xl': '32px',
				'2xl': '48px',
				'3xl': '64px'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
