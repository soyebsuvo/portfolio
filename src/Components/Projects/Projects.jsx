import project from '../../assets/project.jpg'
export default function Projects() {
    return (
        <div className='md:px-16'>
            <div className="grid grid-cols-3 gap-3">
                <div>
                    <img src={project} alt="" />
                </div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}
