import logo from '../assets/logo.svg';
import document from '../assets/icon-document.svg';
import folder from '../assets/icon-folder.svg';
import upload from '../assets/icon-upload.svg';

export default function Primary() {
    return (
        <div className='primary'>
            <img
                src={logo}
                alt="logo fylo"
            />
            <div className='icons'>
                <div className='bg-icons'>
                    <img
                        src={document}
                        alt="icon document"
                    />
                </div>
                <div className='bg-icons'>
                    <img
                        src={folder}
                        alt="icon folder"
                    />
                </div>
                <div className='bg-icons'>
                    <img
                        src={upload}
                        alt="icon upload"
                    />
                </div>
            </div>
        </div>
    )
}
