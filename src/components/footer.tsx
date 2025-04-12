export default function Footer() {
    return (
      <footer className="w-full px-4 py-8 mt-16 border-t border-neutral-800 text-sm text-zinc-500">
        <div className="max-w-4xl mx-auto text-left">
          &copy; {new Date().getFullYear()} eightharsh. All rights reserved.
        </div>
      </footer>
    );
  }
  