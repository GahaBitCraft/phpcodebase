document.addEventListener('DOMContentLoaded', () => {
    hljs.highlightAll();

    // Add copy buttons to all code blocks
    document.querySelectorAll('pre').forEach((pre, index) => {
        const button = document.createElement('button');
        button.className = 'copy-btn';
        button.innerHTML = 'Copy';
        pre.appendChild(button);

        console.log(`Copy button added to code block #${index + 1}`);

        button.addEventListener('click', () => {
            const code = pre.querySelector('code').innerText;
            navigator.clipboard.writeText(code).then(() => {
                button.innerHTML = 'Copied!';
                setTimeout(() => (button.innerHTML = 'Copy'), 2000);
            });
        });
    });
});