<section id="algorithm">
    <h2>Simple Algorithm Steps for Mini Calendar</h2>
    <ol>
        <li>
            <strong>Setup HTML:</strong>
            <ul>
                <li>Create a basic HTML structure.</li>
                <ul>
                    <li>Add <code>DOCTYPE</code> declaration.</li>
                    <li>Include <code>html</code>, <code>head</code>, and <code>body</code> tags.</li>
                    <li>Add <code>title</code> and link to CSS file in the <code>head</code>.</li>
                    <li>Create a <code>div</code> container with nested <code>div</code> elements for month, weekday, day, and year.</li>
                    <li>Link to JavaScript file before the closing <code>body</code> tag.</li>
                </ul>
            </ul>
        </li>
        <li>
            <strong>Setup CSS:</strong>
            <ul>
                <li>Style the body to center the container and set the background color.</li>
                <ul>
                    <li>Use <code>display: flex</code>, <code>justify-content: center</code>, <code>align-items: center</code>.</li>
                </ul>
                <li>Style the container.</li>
                <ul>
                    <li>Set dimensions, background color, and border radius.</li>
                </ul>
                <li>Style the month section.</li>
                <ul>
                    <li>Set background color, height, font size, font weight, text color, and centering styles.</li>
                </ul>
                <li>Style the mini container.</li>
                <ul>
                    <li>Use <code>display: flex</code>, <code>flex-direction: column</code>, <code>justify-content: space-evenly</code>, <code>align-items: center</code>.</li>
                </ul>
                <li>Style individual date elements.</li>
                <ul>
                    <li>Set font size, font weight, and text color.</li>
                </ul>
            </ul>
        </li>
        <li>
            <strong>Setup JavaScript:</strong>
            <ul>
                <li>Select the month, weekday, day, and year elements.</li>
                <ul>
                    <li>Use <code>document.querySelector</code> to select elements by ID.</li>
                </ul>
                <li>Create a new Date object.</li>
                <ul>
                    <li>Use <code>new Date()</code>.</li>
                </ul>
                <li>Get and set the current month.</li>
                <ul>
                    <li>Use <code>date.toLocaleDateString("en", { month: "long" })</code>.</li>
                </ul>
                <li>Get and set the current weekday.</li>
                <ul>
                    <li>Use <code>date.toLocaleDateString("en", { weekday: "long" })</code>.</li>
                </ul>
                <li>Get and set the current day.</li>
                <ul>
                    <li>Use <code>date.getDate()</code>.</li>
                </ul>
                <li>Get and set the current year.</li>
                <ul>
                    <li>Use <code>date.getFullYear()</code>.</li>
                </ul>
            </ul>
        </li>
    </ol>
</section>