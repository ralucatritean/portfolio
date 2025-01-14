import CV from "../../assets/images/cv.png"
import Game1 from "../../assets/images/tictactoe.png";
import Game2 from "../../assets/images/memory.jpg";
import Game3 from "../../assets/images/snake.png";
import SHOP from "../../assets/images/shop.png";
import Movie from "../../assets/images/movie.png";

export const SidebarData=[
    {
        title: "CV",
        icon: <img className='iconImage' src={CV} alt="CV Icon" />,
        link:"/MyCvPage"
    },
    {
        title: "Tic Tac Toc",
        icon: <img className='iconImage' src={Game1} alt="Tic Tac Toc Game" />,
        link:"/TicTacToe"
    },
    
    {
        title: "MemoryGame",
        icon: <img className='iconImage' src={Game2} alt="Memory Game" />,
        link:"/MemoryGame"
    },
    {
        title: "V Project",
        icon: <img className='iconImage' src={Game3} alt="Snake Game" />,
        link:"/SnakeGame"
    },
    {
        title: "Shop",
        icon: <img className='iconImage' src={SHOP} alt="Shop" />,
        link:"/MyShop"
    },
    {
        title: "Movie",
        icon: <img className='iconImage' src={Movie} alt="Movie" />,
        link:"/Movie"
    }
]