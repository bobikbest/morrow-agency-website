export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16 px-6 md:px-12 mt-32" id="contact">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-6">Готовы обсудить проект?</h2>
          <a href="mailto:hello@morrow.agency" className="text-xl opacity-70 hover:opacity-100 transition-opacity apple">hello@morrow.agency</a>
        </div>
        <div className="flex flex-col md:items-end justify-between">
          <div className="flex gap-6 text-sm opacity-60">
            <a href="#" className="hover:opacity-100 transition-opacity">Telegram</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Behance</a>
          </div>
          <p className="text-sm opacity-40 mt-12 md:mt-0">© 2026 MORROW AGENCY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
