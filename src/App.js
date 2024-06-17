import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import BookList from './components/BookList';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook';
import BookDetail from './components/BookDetail';
import UserList from './components/UserList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';
import UserDetail from './components/UserDetail';
import LoanList from './components/LoanList';
import AddLoan from './components/AddLoan';
import EditLoan from './components/EditLoan';
import LoanDetail from './components/LoanDetail';
import SearchBooks from './components/SearchBooks';
import Login from './components/Login';
import LoginOrRegister from './components/LoginOrRegister';
import BookCatalog from './pages/BookCatalog';
const App = () => {
  const [books, setBooks] = useState([]);
  const [users, setUsers] = useState([]);
  const [loans, setLoans] = useState([]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1, available: true }]);
  };

  const updateBook = (updatedBook) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
  };

  const deleteBook = (id) => {
    setBooks(books.filter(book => book.id !== id));
  };

  const addUser = (user) => {
    setUsers([...users, { ...user, id: users.length + 1 }]);
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => user.id === updatedUser.id ? updatedUser : user));
  };

  const deleteUser = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const addLoan = (loan) => {
    setLoans([...loans, { ...loan, id: loans.length + 1 }]);
    setBooks(books.map(book => book.id === loan.bookId ? { ...book, available: false } : book));
  };

  const updateLoan = (updatedLoan) => {
    setLoans(loans.map(loan => loan.id === updatedLoan.id ? updatedLoan : loan));
  };

  const deleteLoan = (id) => {
    const loanToDelete = loans.find(loan => loan.id === id);
    setLoans(loans.filter(loan => loan.id !== id));
    setBooks(books.map(book => book.id === loanToDelete.bookId ? { ...book, available: true } : book));
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login addUser={addUser} users={users} />} />
        <Route path="/choose-login" element={<LoginOrRegister />} />
        <Route path="/books" element={<BookList books={books} />} />
        <Route path="/add-book" element={<AddBook addBook={addBook} />} />
        <Route path="/edit/:id" element={<EditBook books={books} updateBook={updateBook} />} />
        <Route path="/book/:id" element={<BookDetail books={books} deleteBook={deleteBook} />} />
        <Route path="/users" element={<UserList users={users} />} />
        <Route path="/user/:id" element={<UserDetail users={users} deleteUser={deleteUser} />} />
        <Route path="/add-user" element={<AddUser addUser={addUser} />} />
        <Route path="/edit-user/:id" element={<EditUser users={users} updateUser={updateUser} />} />
        <Route path="/loans" element={<LoanList loans={loans} />} />
        <Route path="/loan/:id" element={<LoanDetail loans={loans} deleteLoan={deleteLoan} />} />
        <Route path="/add-loan" element={<AddLoan addLoan={addLoan} />} />
        <Route path="/edit-loan/:id" element={<EditLoan loans={loans} updateLoan={updateLoan} />} />
        <Route path="/search-books" element={<SearchBooks books={books} />} />
        <Route path="/books" element={<BookCatalog />} />

      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
