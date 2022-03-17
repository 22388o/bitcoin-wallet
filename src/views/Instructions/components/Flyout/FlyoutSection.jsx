import { FlyoutRow } from './FlyoutRow';

export const FlyoutSection = ({ title, sections, setOpen }) => (
  <div>
    <h3 className="font-medium text-gray-900">{title}</h3>
    <dl className="mt-2 border-t border-b border-gray-200 divide-y divide-gray-200">
      {sections.map((section) => (
        <FlyoutRow
          {...section}
          id={`#${title} ${section.title}`.split(' ').join('_')}
          setOpen={setOpen}
        />
      ))}
    </dl>
  </div>
);
