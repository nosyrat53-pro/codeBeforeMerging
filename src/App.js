import React, { useState } from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import SubjectScreen from './screens/subjectScreen';
import { detectLanguage } from './languages/LanguagesManager';
import 'bootstrap/dist/css/bootstrap.min.css';
import UnitScreen from './screens/unitScreen';
import LessonScreen from './screens/lessonScreen';
import AllComments from './screens/allComments';
import ExamScreen from './screens/examScreen';
import OffersScreen from './screens/offersScreen';
import Program from './screens/program';
import WalletScreen from './screens/wallet';
import ProfileScreen from './screens/profileScreen';
import ExamsTableScreen from './screens/examTableScreen';
import AudioPlayerScreen from './screens/audioPlayer';
import SubjectsScreen from './screens/subjectsScreen';
import ArchivedScreen from './screens/archived';
import StudentArchiveScreen from './screens/studentArchive';
// import { store } from './app/store'
// import { Provider } from 'react-redux'

function App() {
  const [language,setLanguage] = useState('ar');

  return (
    // <Provider store={store}>
      <div className="app" style={{direction: detectLanguage(language)}}>
      <BrowserRouter>
      <Routes>
          <Route path='/subject' element={<SubjectScreen />} />
          <Route path='/unit' element={<UnitScreen />} />
          <Route path='/lesson' element={<LessonScreen />} />
          <Route path='/allcomments' element={<AllComments />} />
          <Route path='/exam' element={<ExamScreen />} />
          <Route path='/offers' element={<OffersScreen />} />
          <Route path='/program' element={<Program />} />
          <Route path='/wallet' element={<WalletScreen />} />
          <Route path='/profile' element={<ProfileScreen />} />
          <Route path='/examtable' element={<ExamsTableScreen />} />
          <Route path='/audioplayer' element={<AudioPlayerScreen />} />
          <Route path='/subjects' element={<SubjectsScreen />} />
          <Route path='/archived' element={<ArchivedScreen />} />
          <Route path='/studentarchive' element={<StudentArchiveScreen />} />
      </Routes>
      </BrowserRouter>
      </div>
    // </Provider>
  );
}

export default App;
