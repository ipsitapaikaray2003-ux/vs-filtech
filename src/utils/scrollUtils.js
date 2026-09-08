/**
 * Smoothly scrolls to a given DOM element ID with navbar offset compensation
 * @param {string} sectionId - The ID of the target element (e.g. 'services')
 * @param {number} offset - Pixel offset for the fixed navbar (default 80)
 * @returns {boolean} - true if element was found and scrolled, false otherwise
 */
export const scrollToSection = (sectionId, offset = 80) => {
  if (!sectionId) return false;
  const cleanId = sectionId.replace(/^[/#]+/, '');
  const el = document.getElementById(cleanId);
  
  if (el) {
    const elementPosition = el.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    return true;
  }
  return false;
};
