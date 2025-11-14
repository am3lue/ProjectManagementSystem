document.addEventListener('DOMContentLoaded', function() {
    // Data for Component Status Chart (Bar Chart)
    const componentStatusData = {
        labels: ['Available', 'In Use', 'Ordered', 'Deprecated'],
        datasets: [{
            label: 'Component Status',
            data: [150, 80, 30, 15],
            backgroundColor: [
                'rgba(67, 97, 238, 0.8)', // primary-color
                'rgba(76, 201, 240, 0.8)', // secondary-color
                'rgba(243, 156, 18, 0.8)', // warning-color
                'rgba(230, 57, 70, 0.8)'  // error-color
            ],
            borderColor: [
                'rgba(67, 97, 238, 1)',
                'rgba(76, 201, 240, 1)',
                'rgba(243, 156, 18, 1)',
                'rgba(230, 57, 70, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Configuration for Component Status Chart
    const componentStatusConfig = {
        type: 'bar',
        data: componentStatusData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: false,
                },
                title: {
                    display: true,
                    text: 'Component Status Overview',
                    color: '#f8f9fa' // light-color
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#f8f9fa' // light-color
                    },
                    grid: {
                        color: 'rgba(248, 249, 250, 0.1)' // light-color with transparency
                    }
                },
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: '#f8f9fa' // light-color
                    },
                    grid: {
                        color: 'rgba(248, 249, 250, 0.1)' // light-color with transparency
                    }
                }
            }
        }
    };

    // Render Component Status Chart
    const componentStatusChartCtx = document.getElementById('componentStatusChart');
    if (componentStatusChartCtx) {
        new Chart(componentStatusChartCtx, componentStatusConfig);
    }

    // Data for Component Types Chart (Doughnut Chart)
    const componentTypesData = {
        labels: ['Magnetic Sensors', 'Microcontrollers', 'Display Units', 'Power Systems'],
        datasets: [{
            label: 'Component Types',
            data: [70, 50, 30, 20],
            backgroundColor: [
                'rgba(67, 97, 238, 0.8)',
                'rgba(76, 201, 240, 0.8)',
                'rgba(56, 176, 0, 0.8)', // success-color
                'rgba(255, 99, 132, 0.8)' // a different color for variety
            ],
            borderColor: [
                'rgba(67, 97, 238, 1)',
                'rgba(76, 201, 240, 1)',
                'rgba(56, 176, 0, 1)',
                'rgba(255, 99, 132, 1)'
            ],
            borderWidth: 1
        }]
    };

    // Configuration for Component Types Chart
    const componentTypesConfig = {
        type: 'doughnut',
        data: componentTypesData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: {
                        color: '#f8f9fa' // light-color
                    }
                },
                title: {
                    display: true,
                    text: 'Distribution by Component Type',
                    color: '#f8f9fa' // light-color
                }
            }
        }
    };

    // Render Component Types Chart
    const componentTypesChartCtx = document.getElementById('componentTypesChart');
    if (componentTypesChartCtx) {
        new Chart(componentTypesChartCtx, componentTypesConfig);
    }
});
