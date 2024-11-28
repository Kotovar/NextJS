import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  const a: [number, string] = [1, '1'];
  // a[0].

  return (
    <div className='p-2 text-lg'>
      <h3>Welcome Home!</h3>
    </div>
  );
}
