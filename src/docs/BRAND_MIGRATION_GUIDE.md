# Brand Migration Guide: Teal & Coral Rebrand

## Overview
This guide outlines the migration from the previous blue/gold brand palette to the new teal/coral palette with Poppins/Roboto typography.

## New Brand Colors

### Primary Palette
- **Primary (Teal)**: `#008080` - Use for headers, navigation, primary buttons
- **Secondary (Light Teal)**: `#20B2AA` - Use for hover states, secondary elements
- **Accent (Coral)**: `#FF6F61` - Use for CTAs, highlights, action buttons
- **Neutral (White)**: `#FFFFFF` - Use for backgrounds, cards
- **Text (Charcoal)**: `#333333` - Use for body text, content

### Extended Palette
- **Teal variations**: `teal-50` through `teal-900`
- **Coral variations**: `coral-50` through `coral-900`
- **Neutral grays**: `gray-50` through `gray-900`

## New Typography

### Font Families
- **Headings**: Poppins (600-800 weight)
- **Body Text**: Roboto (300-700 weight)
- **Display**: Poppins (for hero sections, large text)

### Usage Guidelines
- Use Poppins for all headings (H1-H6), CTAs, and navigation
- Use Roboto for body text, paragraphs, forms, and UI elements
- Maintain consistent font weights: 600+ for headings, 400-500 for body

## Migration Steps

### 1. Update Existing Components

#### Before (Old Brand):
```tsx
<button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-hero">
  Get Quote
</button>
```

#### After (New Brand):
```tsx
<BrandButton variant="primary">
  Get Quote
</BrandButton>
// OR
<button className="bg-brand-primary hover:bg-brand-primary-dark text-white font-heading">
  Get Quote
</button>
```

### 2. Color Class Replacements

| Old Class | New Class | Usage |
|-----------|-----------|-------|
| `bg-brand-primary` (old blue) | `bg-brand-primary` (teal) | Primary backgrounds |
| `bg-brand-gold` | `bg-brand-accent` | Action buttons, highlights |
| `text-brand-primary` | `text-brand-primary` | Primary text color |
| `font-hero` | `font-heading` | Headings, CTAs |
| `font-body` | `font-body` | Body text (now Roboto) |

### 3. Typography Class Updates

| Old Class | New Class | Usage |
|-----------|-----------|-------|
| `font-hero` | `font-heading` | All headings |
| `font-dancing` | `font-heading` | Decorative text (now Poppins) |
| `font-oswald` | `font-heading` | Strong headings |
| `font-sans` | `font-body` | Body text |

### 4. Component-Specific Updates

#### Headers
```tsx
// Before
<h1 className="font-hero text-brand-primary text-4xl">Title</h1>

// After
<BrandHeading level={1} size="3xl">Title</BrandHeading>
// OR
<h1 className="font-heading text-brand-primary text-4xl font-semibold">Title</h1>
```

#### Buttons
```tsx
// Before
<button className="bg-brand-gold hover:bg-brand-gold-dark text-white">
  Click Me
</button>

// After
<BrandButton variant="accent">Click Me</BrandButton>
// OR
<button className="bg-brand-accent hover:bg-brand-coral-dark text-white font-heading">
  Click Me
</button>
```

#### Cards
```tsx
// Before
<div className="bg-white border border-gray-200 rounded-lg shadow-md">
  Content
</div>

// After
<BrandCard>Content</BrandCard>
// OR
<div className="bg-white border border-brand-primary/10 rounded-xl shadow-md hover:shadow-lg">
  Content
</div>
```

## CSS Custom Properties

Use these CSS variables for consistent theming:

```css
/* Available CSS Variables */
--color-teal: #008080;
--color-coral: #FF6F61;
--color-white: #FFFFFF;
--color-charcoal: #333333;
--font-heading: 'Poppins', system-ui, sans-serif;
--font-body: 'Roboto', system-ui, sans-serif;
```

## Brand Components

### Available Components
1. **BrandButton** - Pre-styled buttons with variants
2. **BrandCard** - Consistent card styling
3. **BrandHeading** - Typography-compliant headings

### Usage Examples
```tsx
import { BrandButton, BrandCard, BrandHeading } from '../components/brand';

function MyComponent() {
  return (
    <BrandCard>
      <BrandHeading level={2} size="xl">
        Welcome to D-Day Evento
      </BrandHeading>
      <p className="font-body text-brand-text mb-4">
        Your trusted event planning partner in Hyderabad.
      </p>
      <BrandButton variant="accent" size="lg">
        Get Started
      </BrandButton>
    </BrandCard>
  );
}
```

## Gradients

### New Brand Gradients
```css
/* Hero sections */
background: linear-gradient(135deg, #008080 0%, #20B2AA 50%, #FFFFFF 100%);

/* CTA buttons */
background: linear-gradient(135deg, #FF6F61 0%, #FF8A80 100%);

/* Brand accent */
background: linear-gradient(135deg, #008080 0%, #FF6F61 100%);
```

### Tailwind Classes
- `bg-gradient-hero` - Teal to white gradient
- `bg-gradient-brand` - Teal to coral gradient
- `bg-gradient-coral` - Coral variations

## Testing Checklist

### Visual Testing
- [ ] All headings use Poppins font
- [ ] All body text uses Roboto font
- [ ] Primary color is teal (#008080)
- [ ] Accent color is coral (#FF6F61)
- [ ] Buttons have proper hover states
- [ ] Cards have consistent styling
- [ ] Gradients render correctly

### Accessibility Testing
- [ ] Color contrast meets WCAG AA standards
- [ ] Text remains readable on all backgrounds
- [ ] Focus indicators are visible
- [ ] Font sizes are appropriate

### Performance Testing
- [ ] Google Fonts load efficiently
- [ ] No layout shifts during font loading
- [ ] CSS custom properties work in all browsers

## Common Issues & Solutions

### Issue: Fonts not loading
**Solution**: Ensure Google Fonts are properly imported in `index.html` and CSS

### Issue: Colors not updating
**Solution**: Clear browser cache and check Tailwind config compilation

### Issue: Inconsistent styling
**Solution**: Use brand components instead of custom classes where possible

### Issue: Poor contrast
**Solution**: Use the predefined color combinations tested for accessibility

## Migration Priority

### High Priority (Update First)
1. Header/Navigation components
2. Hero sections
3. Primary CTAs and buttons
4. Main headings

### Medium Priority
1. Service cards
2. Testimonial sections
3. Footer
4. Form elements

### Low Priority
1. Secondary content
2. Utility components
3. Admin interfaces
4. Error pages

## Support

For questions about the brand migration:
1. Check this guide first
2. Review the brand theme configuration in `src/config/brandTheme.ts`
3. Use the `useBrandTheme` hook for dynamic theming
4. Refer to brand components in `src/components/brand/`

Remember: Consistency is key. Use the provided brand components and utilities to ensure a cohesive visual experience across the entire application.