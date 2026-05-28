import { useState } from 'react'
import './App.css'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import ProfileModal from './components/ProfileModal.jsx'
import HomePage from './pages/HomePage.jsx'
import MembersPage from './pages/MembersPage.jsx'

function App() {
  const [page, setPage] = useState('home')
  const [selectedMember, setSelectedMember] = useState(null)

  return (
    <>
      <Header page={page} setPage={setPage} />
      {page === 'members' ? (
        <MembersPage setSelectedMember={setSelectedMember} />
      ) : (
        <HomePage setPage={setPage} setSelectedMember={setSelectedMember} />
      )}
      <Footer />
      {selectedMember && (
        <ProfileModal
          member={selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}
    </>
  )
}

export default App
