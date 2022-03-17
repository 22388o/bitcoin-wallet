import { ClipboardListIcon } from '@heroicons/react/outline';
import { useState } from 'react';
import { Flyout } from './components/Flyout';
import { SectionGroup, SectionHeading } from './components/Section';

const content = [
    {
        title: 'Part 1: Planting the seed',
        sections: [
            { title: 'Introduction', component: null },
            { title: 'Generating a mnemonic', component: null },
            { title: 'Deriving a private key', component: null },
            { title: 'Storing fingerprint', component: null },
            { title: 'Deriving an xpub', component: null },
            { title: 'Deriving child public keys', component: null },
            { title: 'Generating an address', component: null },
        ],
    },
    {
        title: 'Part 2: Querying the blockchain',
        sections: [
            { title: 'Introduction', component: null },
            { title: 'Querying transactions', component: null },
            { title: 'Decorating transactions', component: null },
            { title: 'Querying UTXOs', component: null },
        ],
    },
    {
        title: 'Part 3: Creating a transaction',
        sections: [
            { title: 'Introduction', component: null },
            { title: 'Create a transaction', component: null },
            { title: 'Signing a transaction', component: null },
            { title: 'Broadcast transaction', component: null },
        ],
    },
];

export function Instructions() {
    const [open, setOpen] = useState(true);
    return (
        <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
                <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <button
                            onClick={() => setOpen(true)}
                            type="button"
                            className="fixed right-0 mr-4 inline-flex items-center px-3 py-2 border border-transparent showdow-sm text-sm leading-4 font-medium rounded-md text-white bg-tobi-blue-600 hover:bg-tobi-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-tobi-blue-500"
                        >
                            <ClipboardListIcon
                                className="-ml-0.5 mr-2 h-4 w-4"
                                aria-hidden="true"
                            />
                            Table of contents
                        </button>
                    </div>
                </div>
            </main>
            <Flyout setOpen={setOpen} open={open} content={content} />
        </div>
    );
}
