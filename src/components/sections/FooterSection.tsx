import { Container } from "../layout/Container";
import { Section } from "../layout/Section";

const footerLinks: Record<string, string[]> = {
  Product: ["All apps", "For Mac", "Stories", "Pricing"],
  Company: ["About", "Blog", "Careers", "Press"],
  Support: ["Help center", "Contact", "System status"],
  Legal: ["Terms", "Privacy", "Cookies"],
};

export function FooterSection() {
  return (
    <Section as="footer" className="py-20 lg:py-24 pt-10 pb-12 border-t border-border-subtle/60">
      <Container className="flex flex-col gap-10">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-9 w-9 rounded-xl bg-surface-subtle flex items-center justify-center">
                <span className="text-sm font-semibold tracking-tight">S</span>
              </div>
              <span className="text-sm font-semibold tracking-wide">
                Setapp
              </span>
            </div>
            <p className="text-[11px] text-text-subtle max-w-xs">
              © {new Date().getFullYear()} Setapp. All rights reserved.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-10 text-[11px] text-text-subtle">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section}>
                <p className="mb-3 text-xs font-medium text-white">{section}</p>
                <ul className="space-y-1.5">
                  {links.map((label) => (
                    <li key={label}>
                      <a href="#" className="hover:text-white">
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between text-[11px] text-text-subtle">
          <div className="flex items-center gap-4">
            <span>Follow</span>
            <div className="flex gap-2">
              <button className="h-7 w-7 rounded-full bg-surface-subtle hover:bg-surface-soft" />
              <button className="h-7 w-7 rounded-full bg-surface-subtle hover:bg-surface-soft" />
              <button className="h-7 w-7 rounded-full bg-surface-subtle hover:bg-surface-soft" />
            </div>
          </div>
          <p>Made for desktop. Best experienced on a Mac.</p>
        </div>
      </Container>
    </Section>
  );
}

