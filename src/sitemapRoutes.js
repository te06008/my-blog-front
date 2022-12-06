import React from 'react';
import { Route, Routes } from 'react-router';

export default (
  <Routes>
    <Route path="login" />
    <Route path="home" />
    <Route path="about" />
    <Route path="blog/:id" />
  </Routes>
);
