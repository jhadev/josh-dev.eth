import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
  return (
    <div>
      <h1>Welcome</h1>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        consequatur beatae tempora natus iste deserunt distinctio maxime ipsa
        cumque, minus officiis facilis molestias doloremque quibusdam corrupti
        sint quaerat incidunt voluptas.
      </p>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Josh A - Web Performance Engineer"
};
