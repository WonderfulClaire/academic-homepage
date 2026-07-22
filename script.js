// Academic homepage — minimal progressive enhancement
document.addEventListener('DOMContentLoaded', function () {
    // Auto-update footer year
    var yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Smooth scroll for in-page nav links
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
        link.addEventListener('click', function (e) {
            var id = this.getAttribute('href');
            if (id.length > 1) {
                var target = document.querySelector(id);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
});
