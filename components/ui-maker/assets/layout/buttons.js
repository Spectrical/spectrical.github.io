const buttonTypes = [
    {
        events: [
            ['click', (span) => span.classList.toggle('pressed')]
        ]
    },
    {
        events: [
            ['mousedown', (span) => span.classList.add('pressed')],
            ['mouseup', (span) => span.classList.remove('pressed')],
            ['mouseleave', (span) => span.classList.remove('pressed')]
        ]
    }
];
document.querySelectorAll('.boxTopMenu').forEach(span => {
    const type = span.getAttribute('buttonType') === '1' ? 1 : 0;
    buttonTypes[type].events.forEach(([event, handler]) => {
        span.addEventListener(event, () => handler(span));
    });
});
document.querySelectorAll('.formCreate').forEach(span => {
    const type = span.getAttribute('buttonType') === '1' ? 1 : 0;
    buttonTypes[type].events.forEach(([event, handler]) => {
        span.addEventListener(event, () => handler(span));
    });
});
document.querySelectorAll('.formTemplates').forEach(span => {
    const type = span.getAttribute('buttonType') === '1' ? 1 : 0;
    buttonTypes[type].events.forEach(([event, handler]) => {
        span.addEventListener(event, () => handler(span));
    });
});