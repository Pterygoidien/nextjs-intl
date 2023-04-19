'use client';

interface ModalProps {
    title?: string;
    isOpen?: boolean;
    onClose: () => void;
    onSubmit: () => void;
    body?: React.ReactNode;
    footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
    title = 'Modal',
    isOpen = false,
}) => {
    return (<>
        <div id="modal--overlay" className=" bg-white border-2">
            <div id="modal">
                <header>
                    <h2>{title}</h2>
                </header>
                <main>
                    Content
                </main>
                <footer>Footer</footer>
            </div>

        </div>
    </>)
}

export default Modal;