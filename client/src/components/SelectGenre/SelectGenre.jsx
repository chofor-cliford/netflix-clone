import React from 'react'
import { Option, Select } from './styles'
import { useDispatch } from 'react-redux';
import { fetchMoviesByGenre } from '../../feautures/slices/netflixSlice';

const SelectGenre = ({genres, type}) => {
  const dispatch = useDispatch();

  return (
    <Select onChange={(e) => dispatch(fetchMoviesByGenre({ genre: e.target.value, type }))}>
      {genres?.map((genre) => (
        <Option value={genre.id} key={genre.id}>{genre.name}</Option>
      ))}
    </Select>
  )
}

export default SelectGenre