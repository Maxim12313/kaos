export default function Footer() {
  return (
    <footer className="w-full h-10 flex flex-col justify-center border-t-2 border-myslate">
      <div className="h-full w-full flex flex-row justify-between items-center px-16 text-sm">
        <p>&copy; 2024 Korean American Otolargyngology Society</p>
        <a
          href="https://github.com/Maxim12313/kaos"
          className="underline underline-offset-2"
        >
          Created By Maxim Kim
        </a>
      </div>
    </footer>
  );
}
