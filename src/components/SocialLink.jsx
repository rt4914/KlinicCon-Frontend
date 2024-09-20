import {Link} from "react-router-dom";

const SocialLink = ({ width = 24, height = 24}) => {
    return <div className={"flex gap-2 m-8"}>
        <Link className={"border-2 border-stone-800 rounded-full p-2 hover:bg-gray-700"} to={"#"}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width={width}
                 height={height}
                 viewBox="0 0 512 512"
                 xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#3B5998" d="M375.992 128h-39.984c-8.844 0-16 7.156-16 16v32.004c0 8.828 7.156 15.984 16 15.984h45.961c22.656 0 37.406 19.339 33.062 42.515l-8.984 47.918c-3.93 21.008-23.828 37.586-44.547 37.586h-25.492c-8.844 0-16 7.156-16 15.984v136.015c0 22.086-17.922 39.984-40.008 39.984-.305.023-26.422 0-40 0-8.828 0-16.008-7.156-16.008-16 0-8.828 7.18-16 16.008-16h32c8.844 0 16-7.156 16-15.984V328.007c0-22.102 17.906-40.008 40.008-40.008h28.914c8.328 0 16.852-6.648 19.07-15.031l8.484-31.953c2.477-9.309-2.812-17.023-11.852-17.023h-44.617c-22.102 0-40.008-17.902-40.008-40.003V136c0-22.102 17.906-40.003 40.008-40.003h39.984c8.844 0 16-7.16 16-16.004V47.988c0-8.824-7.156-15.984-16-15.984h-63.984c-44.188 0-80.016 35.809-80.016 79.992v71.992c0 22.101-17.898 40.003-39.984 40.003h-23.625c-9.039 0-16.383 7.715-16.383 17.023v31.953c0 8.383 6.75 15.031 15.07 15.031h24.938c22.086 0 39.984 17.906 39.984 40.008v39.983c0 8.844-7.156 16.008-15.984 16.008-8.844 0-16-7.164-16-16.008V335.99c0-8.828-7.172-15.984-16-15.984h-26.5c-20.719 0-37.508-16.578-37.508-37.586v-47.918c0-23.176 18.367-42.515 41.023-42.515h22.984c8.828 0 16-7.156 16-15.984v-72.008C192.008 46.555 238.562 0 296 0h79.992C398.094 0 416 17.902 416 39.988v48.004C416 110.093 398.094 128 375.992 128zM208.008 415.998c8.828 0 15.984 7.156 15.984 16 0 8.828-7.156 16.008-15.984 16.008-8.844 0-16-7.18-16-16.008 0-8.844 7.156-16 16-16z"/></svg>
        </Link>
        <Link className={"border-2 border-stone-800 rounded-full p-2 hover:bg-gray-700"} to={"#"}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width={width}
                 height={height}
                 viewBox="0 0 512 512"
                 xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" fill="#00ACED" d="M512 107.867c0 7.031-2.203 13.527-5.977 18.836-10.062 15.051-23.727 25.977-37.367 37.422a15.803 15.803 0 0 0-4.805 10.531c-1.523 69.156-27.141 148.246-72.78 200.512-54.586 62.49-129 104.881-215.078 104.881-8.824 0-16-7.172-16-16 0-8.844 7.176-16 16-16 158.555 0 244.944-138.6 255.007-256.924.469-1.652.758-3.785.758-6.816 0-1.008.016-2.012.07-2.996.789-13.796 6.961-26.156 16.43-35.019.469-.449.828-.859 1.172-1.273 11.555-11.375 22.211-24.668 30.461-37.152-11.719 5.258-24.078 9.238-36.922 11.93-2.148 0-3.961-1.812-3.961-4a3.98 3.98 0 0 1 1.164-2.816c.031-.035-.109.016-.125.016 12.609-11.012 22.281-25.402 27.484-41.816-8.469 5.059-17.406 9.418-26.68 13.098-5.992 2.387-12.5 3.766-19.359 3.766-10.672 0-20.593-3.211-28.843-8.719-.32-.215-.648-.359-.969-.555-13.672-9.184-29.617-14.711-47.68-14.711l-1.883.34c-39.742 0-69.945 22.406-81.234 56.707-.317.147-3.551 14.406-3.875 16.453-2.996 19.121-19.535 33.742-39.504 33.742a37.59 37.59 0 0 1-6.387-.539c-52.472-9.812-99.847-32.504-135.207-69.406-.215-.18-.379-.234-.684-.539-4.68-4.684-12.27-4.684-16.969 0a12.307 12.307 0 0 0-2.531 3.73c-.141.344-.23.344-.34.414-4.27 9.867-7.391 20.539-7.391 31.09 0 21.832 8.879 41.761 22.227 57.601 0 .02-.16-.07-.09 0a8.005 8.005 0 0 1 1.867 5.148c0 4.414-3.59 8-8.004 8-.879 0-1.703-.23-2.492-.5a15.06 15.06 0 0 0-.375-.16c-.145.051-.305.125-.559 0a7.903 7.903 0 0 0-3.566-.844c-4.344 0-7.859 3.516-7.969 7.82 4.164 28.469 21.637 53.676 45.227 68.458-.305-.031-.484-.031-.375.031a8.019 8.019 0 0 1 3.621 6.695c0 4.414-3.586 8-8 8-.09 0-.18-.016-.27-.016-.105-.023-.195-.055-.305-.07-.285-.039-.555-.094-.844-.125-2.152.109-3.84 1.812-3.84 3.961a3.8 3.8 0 0 0 .395 1.742c6.512 16.219 17.527 30.078 31.395 40.219.164.125.199.234.395.375 1.184.844 2.297 1.812 3.375 2.875 10.922 10.922 10.922 28.648 0 39.594-3.355 3.328-7.34 5.664-11.555 6.953-.035.016-.016 0-.055.016-16.395 5.203-33.762 8.219-52.203 8.219h-9.992c-2.207 0-4 1.797-4 4 0 1.297.645 2.375 1.578 3.094 6.586 3.906 13.332 7.727 20.344 11.281l-.016.016c4.715 2.639 7.965 7.623 7.965 13.436 0 8.523-6.906 15.43-15.43 15.43-3.48 0-6.672-1.203-9.258-3.141-11.211-5.867-22.082-12.148-32.414-18.836-12.59-8.142-17.938-23.986-12.879-38.197 4.594-12.992 16.703-19.086 30.105-19.086 5.953.719 17.902 0 24 0 12.289 0 22.355-2.531 33.996-5.344-17.473-14.82-30.965-34.555-38.266-57.57a32.619 32.619 0 0 1-.645-17.398c-20.648-22.531-35.089-55.293-35.089-87.672.16-8.02 5.273-14.711 10.496-20.434-5.059-13.761-10.496-28.433-10.496-43.574 0-22.137 8.558-43.969 19.554-63.004 5.309-9.184 17.957-16.164 28.449-16.988 9.598 0 18.031 5.273 24.148 12.844 30.176 37.352 77.406 57.426 123.871 68.906.789.141 1.633.25 2.477.25 7.625 0 13.938-5.293 15.59-12.434C242.817 71.844 284.563 32 342.118 32c24.344 0 48.078 7.34 68.147 20.633 3.125 1.973 6.766 3.176 10.727 3.176 1.758 0 3.445-.289 5.039-.719 8.672-3.23 17.117-6.98 25.117-11.785 5.078-3.035 10.727-3.266 16.359-3.266 7.109 0 14.195 1.129 20.008 5.793 10.422 8.379 14.633 22.391 10.562 35.199 0 .035-.016.07-.016.105A32.493 32.493 0 0 1 512 107.867zM31.998 368.043c-1.258-.141 1.253 0 0 0zm32-311.984c-.825 0 .828-.075 0 0zm56.007 383.99c8.828 0 16.004 7.156 16.004 16 0 8.828-7.176 16-16.004 16-8.844 0-16-7.172-16-16 0-8.844 7.157-16 16-16z"/></svg>
        </Link>
        <Link className={"border-2 border-stone-800 rounded-full p-2 hover:bg-gray-700"} to={"#"}>
            <svg xmlns="http://www.w3.org/2000/svg"
                 width={width}
                 height={height}
                 viewBox="0 0 64 64"
                 xml:space="preserve"><path fill-rule="evenodd" clip-rule="evenodd" d="M21.986 40.006a1.993 1.993 0 1 1 0 3.985 1.993 1.993 0 0 1 0-3.985zm-5.841-5.707c-1.261-8.749 4.81-16.862 13.559-18.123s16.863 4.81 18.124 13.559-4.81 16.863-13.559 18.124c-.098.015-.192.015-.289.026l.296-.041a2.002 2.002 0 0 1-.57-3.962l-.003-.007h.008c6.56-.945 11.109-7.028 10.164-13.588-.945-6.561-7.027-11.11-13.588-10.165-6.557.945-11.11 7.028-10.164 13.588 0 .003 0 .005.002.005l-.007.003a2 2 0 0 1-3.962.57l.044.298c-.014-.098-.041-.19-.055-.287zm31.844-21.294a3.006 3.006 0 0 1 3.006-3.004 3 3 0 0 1 2.999 2.958v.094a3 3 0 0 1-2.999 2.958 3.006 3.006 0 0 1-3.006-3.006zM58.661 58.52C55.183 62.034 50.357 64 42.012 64H21.986c-8.345 0-13.17-1.966-16.646-5.48C1.908 55.054 0 50.216 0 42.014V21.988c0-8.205 1.908-13.04 5.34-16.506C8.816 1.967 13.641 0 21.986 0h20.025c8.346 0 13.171 1.967 16.649 5.482.223.223.427.468.633.71.422.366.695.902.695 1.505a2 2 0 0 1-2 2c-.604 0-1.14-.274-1.506-.698l-.026.021c-.206-.245-.399-.499-.627-.728-3.042-3.076-7.533-4.283-14.837-4.283H22.997c-7.302 0-11.784 1.207-14.826 4.283C5.168 11.325 4 15.828 4 23.005v17.997c0 7.18 1.168 11.671 4.171 14.703C11.213 58.78 15.695 60 22.997 60h17.997c7.304 0 11.795-1.22 14.837-4.295 3.003-3.032 4.159-7.523 4.159-14.703V23.006a47.76 47.76 0 0 0-.218-4.78l.009-.002a2.016 2.016 0 0 1 4.009-.411c.003.029 0 .056 0 .085h.005a42.57 42.57 0 0 1 .205 4.09v20.025c0 8.203-1.91 13.041-5.339 16.507z"/></svg>
        </Link>
    </div>
}
export default SocialLink;