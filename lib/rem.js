/*!
 * rem.js v0.1.0
 *
 */

(function() {
    function updateFontSize() {
        const deviceWidth = document.documentElement.clientWidth;
        const r = 16;
        document.documentElement.style.fontSize = `${deviceWidth / r}px`;
    }

    updateFontSize();
    window.addEventListener('resize', updateFontSize);
})();
