import { FontBoldIcon, FontItalicIcon, StrikethroughIcon } from '@radix-ui/react-icons';
import * as Toolbar from '@radix-ui/react-toolbar';

interface HeaderProps {

}

export default function Header(props: HeaderProps) {
    return (
        <>
            <Toolbar.Root className='p-3 text-gray flex items-center'>
                <Toolbar.ToggleGroup type="multiple" aria-label="Text formatting">
                    <Toolbar.ToggleItem value="bold" aria-label="Bold">
                        Logo Name
                    </Toolbar.ToggleItem>
                    
                </Toolbar.ToggleGroup>
                <Toolbar.Button className="shadow-white p-3" style={{ marginLeft: 'auto' }}>
                    Share
                </Toolbar.Button>
            </Toolbar.Root>
        </>
    )
}