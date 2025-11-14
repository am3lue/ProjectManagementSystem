document.addEventListener('DOMContentLoaded', function() {
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabLinks.forEach(link => {
        link.addEventListener('click', () => {
            const tab = link.dataset.tab;

            tabLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            tabPanes.forEach(p => p.classList.remove('active'));
            document.getElementById(tab).classList.add('active');
        });
    });

    // General Settings
    const systemNameInput = document.getElementById('system-name');
    const dateFormatSelect = document.getElementById('date-format');
    const generalSettingsForm = document.getElementById('general-settings-form');

    // Load general settings from local storage
    if (localStorage.getItem('systemName')) {
        systemNameInput.value = localStorage.getItem('systemName');
    }
    if (localStorage.getItem('dateFormat')) {
        dateFormatSelect.value = localStorage.getItem('dateFormat');
    }

    // Save general settings to local storage
    if(generalSettingsForm) {
        generalSettingsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            localStorage.setItem('systemName', systemNameInput.value);
            localStorage.setItem('dateFormat', dateFormatSelect.value);
            alert('General settings saved!');
        });
    }


    // Appearance Settings
    const themeOptions = document.querySelectorAll('.theme-option');

    // Set active theme option
    const currentTheme = localStorage.getItem('theme') || 'dark-theme';
    themeOptions.forEach(opt => {
        if (opt.dataset.theme === currentTheme) {
            opt.classList.add('active');
        } else {
            opt.classList.remove('active');
        }
    });

    // Set theme
    themeOptions.forEach(option => {
        option.addEventListener('click', () => {
            const theme = option.dataset.theme;
            localStorage.setItem('theme', theme);
            document.body.classList.remove('dark-theme', 'light-theme');
            document.body.classList.add(theme);

            themeOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
        });
    });
});