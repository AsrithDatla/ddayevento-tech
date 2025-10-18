#!/usr/bin/env python3
"""
Script to remove scroll-based animations from React components
"""

import os
import re

def remove_scroll_animations(file_path):
    """Remove whileInView and scroll-based animations from a file"""
    
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace motion.div with whileInView with regular div
    content = re.sub(
        r'<motion\.div\s+[^>]*whileInView[^>]*>',
        lambda m: '<div' + re.sub(r'\s*(initial|whileInView|viewport|transition)\s*=\s*{[^}]*}', '', m.group(0)[10:-1]) + '>',
        content,
        flags=re.DOTALL
    )
    
    # Replace closing motion.div with div
    content = re.sub(r'</motion\.div>', '</div>', content)
    
    # Remove unused imports if motion is only used for scroll animations
    if 'whileInView' not in content and 'useScroll' not in content and 'useTransform' not in content:
        # Check if motion is still used for other animations
        if not re.search(r'motion\.\w+', content):
            content = re.sub(r'import\s+{[^}]*motion[^}]*}\s+from\s+[\'"]framer-motion[\'"];?\n?', '', content)
            content = re.sub(r',\s*motion\s*', '', content)
            content = re.sub(r'motion\s*,\s*', '', content)
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"Fixed scroll animations in {file_path}")

# List of components to fix
components_to_fix = [
    'src/components/ConnectWithUs.tsx',
    'src/components/EventCategories.tsx', 
    'src/components/Footer.tsx',
    'src/components/Testimonials.tsx',
    'src/components/TrustIndicators.tsx',
    'src/components/ValueProp.tsx',
    'src/components/ServicesGrid.tsx'
]

for component in components_to_fix:
    if os.path.exists(component):
        remove_scroll_animations(component)
    else:
        print(f"File not found: {component}")

print("Scroll animation removal complete!")