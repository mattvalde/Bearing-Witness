(function () {
  const horizontalAreas = document.querySelectorAll('[data-horizontal-wheel]');

  horizontalAreas.forEach((area) => {
    area.addEventListener('wheel', (event) => {
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) {
        return;
      }

      const maxScroll = area.scrollWidth - area.clientWidth;

      if (maxScroll <= 0) {
        return;
      }

      const nextScroll = area.scrollLeft + event.deltaY;
      const atStart = area.scrollLeft <= 0;
      const atEnd = area.scrollLeft >= maxScroll - 1;
      const movingBack = event.deltaY < 0;
      const movingForward = event.deltaY > 0;

      if ((atStart && movingBack) || (atEnd && movingForward)) {
        return;
      }

      event.preventDefault();
      area.scrollLeft = Math.max(0, Math.min(maxScroll, nextScroll));
    }, { passive: false });
  });
})();
