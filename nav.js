(function() {
  var NAV = [
    {
      label: 'Getting Started',
      page: 'index.html',
      items: [
        { anchor: '#overview', name: 'Overview' },
        { anchor: '#philosophy', name: 'Design Philosophy' },
        { anchor: '#architecture', name: 'Token Architecture' },
      ]
    },
    {
      label: 'Primitive Tokens',
      page: 'primitives.html',
      items: [
        { anchor: '#color-primitive', name: 'Color Primitives' },
        { anchor: '#spacing-primitive', name: 'Spacing Scale' },
        { anchor: '#radius-primitive', name: 'Radius Scale' },
        { anchor: '#typography-primitive', name: 'Typography Scale' },
      ]
    },
    {
      label: 'Semantic Tokens',
      page: 'semantics.html',
      items: [
        { anchor: '#semantic-bg', name: 'Background' },
        { anchor: '#semantic-fg', name: 'Foreground' },
        { anchor: '#semantic-border', name: 'Border' },
        { anchor: '#semantic-state', name: 'State Colors' },
        { anchor: '#semantic-text', name: 'Text Colors' },
      ]
    },
    {
      label: 'Components',
      page: 'components.html',
      items: [
        { anchor: '#comp-buttons', name: 'Buttons 1' },
        { anchor: '#comp-buttons-2', name: 'Buttons 2' },
        { anchor: '#comp-inputs-1', name: 'Inputs 1' },
        { anchor: '#comp-inputs-2', name: 'Inputs 2' },
        { anchor: '#comp-navigations', name: 'Navigations' },
        { anchor: '#comp-alerts', name: 'Alerts & Notifications' },
        { anchor: '#comp-dropdowns', name: 'Dropdowns' },
        { anchor: '#comp-tabs', name: 'Tabs' },
        { anchor: '#comp-loaders', name: 'Loaders' },
        { anchor: '#comp-progress-1', name: 'Progress & Indicators 1' },
        { anchor: '#comp-progress-2', name: 'Progress & Indicators 2' },
        { anchor: '#comp-logo', name: 'Logo' },
        { anchor: '#comp-pills', name: 'Tags & Chips' },
        { anchor: '#comp-checkboxes', name: 'Checkboxes & Radios' },
        { anchor: '#comp-chat', name: 'Chat System' },
        { anchor: '#comp-tables', name: 'Tables' },
        { anchor: '#comp-tooltips', name: 'Tooltips' },
        { anchor: '#comp-effects', name: 'Effects' },
        { anchor: '#comp-avatars', name: 'Profile Pics & Avatars' },
        { anchor: '#comp-cards', name: 'Cards & Lists 1' },
        { anchor: '#comp-modals', name: 'Modals' },
        { anchor: '#comp-cards-2', name: 'Cards & Lists 2' },
        { anchor: '#comp-file-upload', name: 'File Upload' },
        { anchor: '#comp-breadcrumb', name: 'Breadcrumb' },
        { anchor: '#comp-misc', name: 'Misc & Helper' },
        { anchor: '#comp-accordion', name: 'Accordion' },
        { anchor: '#comp-pagination', name: 'Pagination System' },
        { anchor: '#comp-skeleton', name: 'Loading States' },
      ]
    },
    {
      label: 'System',
      page: 'system.html',
      items: [
        { anchor: '#motion', name: 'Motion System' },
        { anchor: '#ios-native', name: 'iOS Native Rules' },
        { anchor: '#accessibility', name: 'Accessibility' },
        { anchor: '#emotional-state-logic', name: 'State Logic' },
        { anchor: '#emotional-states', name: 'Emotional States' },
      ]
    },
  ];

  var currentPage = window.location.pathname.split('/').pop() || 'index.html';

  var nav = document.getElementById('pawwel-nav');
  if (!nav) return;

  var html = '';
  NAV.forEach(function(group) {
    var isSamePage = group.page === currentPage;
    html += '<div class="nav-group">';
    html += '<div class="nav-group-label">' + group.label + '</div>';
    html += '<div class="nav-group-items">';
    group.items.forEach(function(item) {
      var href = isSamePage ? item.anchor : group.page + item.anchor;
      html += '<a class="nav-link" href="' + href + '"><span class="nav-dot"></span>' + item.name + '</a>';
    });
    html += '</div></div>';
  });

  nav.innerHTML = html;

  // ─── ACTIVE NAV LINK (runs after nav is injected) ───
  var sections = document.querySelectorAll('.section[id]');
  var navLinks = document.querySelectorAll('.nav-link');

  if (sections.length && navLinks.length) {
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          navLinks.forEach(function(link) {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + entry.target.id) {
              link.classList.add('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(function(s) { observer.observe(s); });
  }
})();
