# 🎨 Real Estate Agent Landing Page: Design Guide & Style Decisions

This document outlines the core design principles, color palette, typography, and architectural layout for the premium real estate landing page.

## 1. Brand Identity & Vibe
- **Keywords:** Professional, Trustworthy, Premium, Elegant, Minimalist.
- **Overall Feel:** A high-end real estate service. The design should evoke confidence and exclusivity while remaining approachable, heavily relying on clean spacing and sharp contrasts rather than heavy shadows or overly complex graphics.

## 2. Color Palette
The color scheme is extracted directly from the reference imagery, focusing on high contrast and elegant accents to guide the user's eye.

| Color Role | Name | Hex Code | Usage |
| :--- | :--- | :--- | :--- |
| **Background** | Cream / Off-White | `#F8F6F0` | Primary background color. Creates a warm, inviting, and premium editorial feel compared to stark, clinical white. |
| **Primary Contrast** | Deep Navy | `#1D263B` | High-contrast sections (like the "專任委託" highlight box), footers, and primary buttons. Conveys authority, stability, and professionalism. |
| **Accent** | Elegant Gold | `#C5A572` | Dividers, icons, English subtitles, highlighted text, and subtle geometric background patterns. Adds a subtle touch of luxury. |
| **Primary Text** | Charcoal | `#1C1C1C` | Main headings and body text for optimal readability on the cream background. |
| **Muted Text** | Gray | `#6B6B6B` | Meta information, secondary descriptions, and subtle borders. |

## 3. Typography
To achieve the editorial look, we pair a classic Serif with a clean Sans-serif font.

### Primary Headings & Accents (Serif)
- **Font Families:** `Playfair Display` (for English) / `Noto Serif TC` (思源宋體 - for Chinese)
- **Usage:** Large titles, English accent phrases (e.g., "R E A L E S T A T E"), and quotes. 
- **Styling:** Use wide letter-spacing (tracking) for English accents to look sophisticated and modern.

### Body Text & UI Elements (Sans-serif)
- **Font Families:** `Inter` (for English) / `Noto Sans TC` (思源黑體 - for Chinese)
- **Usage:** Paragraphs, navigation links, buttons, and smaller labels. Clean, modern, and highly readable.

## 4. UI Components & Styling

- **Borders & Dividers:**
  - Use thin `1px` solid borders in Gold (`#C5A572`) or Light Gray to separate sections (like the sidebar) and frame content cleanly.
  - Incorporate thin-line geometric decorations (like corner accents) into the hero section.

- **Cards & Containers:**
  - Flat, minimalist design. 
  - Avoid heavy drop shadows. Rely on background color shifts (e.g., Cream to White) and thin borders to separate elements to maintain an editorial look.

- **Buttons:**
  - **Primary Button:** Deep Navy background with White or Gold text. Sharp corners or very slight rounding (2px) to maintain a formal, structured look.
  - **Secondary Button:** Transparent background with a thin Gold border and Gold text.

- **Imagery:**
  - Use CSS gradient masks to smoothly blend background images (like the city skyline) into the cream background.
  - Photography should be high-resolution and slightly color-graded to match the warm tones of the palette.

## 5. Layout Architecture

The application shell follows a three-column structure on desktop, condensing on mobile:

1. **Left Sticky Sidebar:** 
   - Keeps the navigation structure consistent with the blog.
   - Includes Agent photo, name, menu links, and categories.
2. **Main Content Area:** 
   - **Hero Banner:** Blended city skyline background, agent's portrait, and elegant typography ("Your Vision. Our Expertise.").
   - **Services Showcase:** Utilizes the Deep Navy background to break up the page and draw attention to premium services (e.g., "專任委託服務計畫"), including the step-by-step timeline graphic.
3. **Right Floating Action Bar (Desktop):** 
   - Fixed action column containing the QR code and social media icons for immediate lead generation.
4. **Mobile Adaptations:**
   - Left sidebar becomes a collapsible top header menu.
   - Right floating action bar transforms into a fixed bottom-tab navigation for quick access to messaging and calling.