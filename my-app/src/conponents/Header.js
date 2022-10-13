export function Header(props){


    return (
        <div classname="navbar bg-light">
        <div className='container-fluid'>
          <a className="navbar-brand" href='#'>{props.title}</a>
        </div>
        </div>


    )
}