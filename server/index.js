import Clerk from '@clerk/clerk-js';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div
    id="user-button"
  ></div>
`;

const userButtonComponent = document.querySelector<HTMLDivElement>('#user-button')!;

const clerk = new Clerk(`pk_test_Y3J1Y2lhbC1wYXJha2VldC02Ni5jbGVyay5hY2NvdW50cy5kZXYk`);
await clerk.load();

clerk.mountUserButton(userButtonComponent);