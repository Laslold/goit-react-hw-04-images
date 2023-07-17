import { useEffect, useState } from 'react';
import { searchPosts } from '../services/post';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from './Modal/';
import Button from './Button';
import Loader from './Loader';
import Searchbar from './Searchbar';
import ImageGallery from './ImageGallery';
import ModalLoader from './Modal/ModalLoader';
const App = () => {
  const [modal, setModal] = useState({
    isOpen: false,
    content: {},
  });
  const [search, setSearch] = useState('');
  const [contents, setContent] = useState({
    items: [],
    loading: false,
    error: null,
    totalHits: null,
  });
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      setContent(prevContent => ({
        ...prevContent,
        loading: true,
        error: null,
      }));

      try {
        const data = await searchPosts(search, page);

        if (data.totalHits === 0) {
          toast.warn(
            <h2>
              "Please enter a valid name or your search did not return any
              results"
            </h2>,
            {
              position: 'top-center',
              autoClose: 3000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'colored',
            }
          );
        }
        setContent(prevContent => ({
          ...prevContent,
          items: [...prevContent.items, ...data.hits],
          loading: false,
          totalHits: data.totalHits,
        }));
      } catch (error) {
        if (error) {
          toast.error('Error with loading!', {
            position: 'top-center',
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'colored',
          });
        }
        setContent(prevContent => ({
          ...prevContent,
          loading: false,
          error,
        }));
      }
    };
    if (search) {
      fetchPosts();
    }
  }, [page, search]);

  const changeSearch = ({ search: newSearch }) => {
    if (search !== newSearch) {
      setSearch(newSearch);
      setContent(prevContent => ({
        ...prevContent,
        items: [],
      }));
      setPage(1);
    }
  };

  const showModal = content => {
    setModal({
      isOpen: true,
      content,
    });
  };
  const closeModal = () => {
    setModal({
      ...modal,
      isOpen: false,
    });
  };
  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const { loading, items, totalHits } = contents;
  const { isOpen, content } = modal;
  return (
    <div>
      {isOpen && (
        <Modal close={closeModal}>
          <img src={content.largeImageURL} alt={content.tags} />
        </Modal>
      )}
      <Searchbar changeSearch={changeSearch} />
      {loading && (
        <ModalLoader>
          <Loader />
        </ModalLoader>
      )}

      <ImageGallery items={items} showModal={showModal} />

      {!loading && items.length > 0 && items.length !== totalHits && (
        <Button onClick={loadMore} text="Load more" />
      )}
      <ToastContainer />
    </div>
  );
};
export default App;

// class App extends Component {
// state = {
//   items: [],
//   loading: false,
//   error: null,
//   page: 1,
//   totalHits: null,
//   search: '',
//   modalOpen: false,
//   modalContent: {},
// };

// componentDidUpdate(_, prevState) {
//   const { page, search } = this.state;
//   if (page > prevState.page || search !== prevState.search) {
//     this.fetchPosts();
//   }
// }
// changeSearch = ({ search }) => {
//   this.setState({
//     search: search.trim(),
//     items: [],
//     page: 1,
//   });
// };
// async fetchPosts() {
//   this.setState({
//     loading: true,
//   });
//   const { search, page, items } = this.state;
//   try {
//     const data = await searchPosts(search, page);
//     if (data.totalHits === 0) {
//       toast.warn(
//         <h2>
//           "Please enter a valid name or your search did not return any
//           results"
//         </h2>,
//         {
//           position: 'top-center',
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           progress: undefined,
//           theme: 'colored',
//         }
//       );
//     }
//     this.setState({
//       items: [...items, ...data.hits],
//       loading: false,
//       totalHits: data.totalHits,
//     });
//   } catch (error) {
//     if (error) {
//       toast.error('Error with loading!', {
//         position: 'top-center',
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//         theme: 'colored',
//       });
//     }
//     this.setState({
//       loading: false,
//       error: error,
//     });
//   }
// }

// loadMore = () => {
//   this.setState(({ page }) => {
//     return { page: page + 1 };
//   });
// };
// showModal = modalContent => {
//   this.setState({
//     modalOpen: true,
//     modalContent,
//   });
// };
// closeModal = () => {
//   this.setState({
//     modalOpen: false,
//   });
// };

// render() {
//   const { items, loading, modalOpen, modalContent, totalHits } = this.state;
//   const { loadMore, changeSearch, showModal, closeModal } = this;
