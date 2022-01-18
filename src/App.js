import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { getCompanies } from './store/slices/companiesSlice';
import { setError } from './store/slices/errorSlice';

import Companies from './pages/Companies';
import Header from './layouts/Header/Header';
import Info from './pages/Info';
import PageNotFound from './pages/PageNotFound'
import Error from './components/Error/ErrorModule';

function App() {

  const dispatch = useDispatch();
  const { isError } = useSelector(store => store.isError);
  const { companies } = useSelector(store => store.companies);

  useEffect(() => {
    dispatch(getCompanies());
  }, [dispatch]);

  useEffect(() => {
    if (companies.length > 0) {
      dispatch(setError(false));
    }
  }, [companies, dispatch]);

  return (
    <Router>
      {isError && <Error />}
      <Header />
      <Routes>
        <Route path='/' element={<Companies />} />
        <Route path='/info' element={<Info />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
