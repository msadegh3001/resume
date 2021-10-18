import React, { Component } from "react";

const List = [
  {
    id: 1,
    name: "Last of Us",
    dailycount: 24,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 2,
    name: "Amoung they",
    dailycount: 14,
    genre: { id: 2, name: "drama" },
    likeState: false,
  },
  {
    id: 3,
    name: "Sunny Days,",
    dailycount: 4,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 4,
    name: "Ship of Deads",
    dailycount: 224,
    genre: { id: 3, name: "comedy" },
    likeState: false,
  },
  {
    id: 5,
    name: "Harry Potter",
    dailycount: 564,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 6,
    name: "Kola Qermezi",
    dailycount: 74,
    genre: { id: 3, name: "comedy" },
    likeState: false,
  },
  {
    id: 7,
    name: "Road 145",
    dailycount: 624,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 8,
    name: "Home",
    dailycount: 6,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 9,
    name: "Cinema",
    dailycount: 6204,
    genre: { id: 3, name: "comedy" },
    likeState: false,
  },
  {
    id: 10,
    name: "Garden",
    dailycount: 55,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 11,
    name: "Office zoon",
    dailycount: 23,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 12,
    name: "Worker",
    dailycount: 90,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 13,
    name: "Alive",
    dailycount: 91,
    genre: { id: 3, name: "comedy" },
    likeState: false,
  },
  {
    id: 14,
    name: "Terminator",
    dailycount: 28,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 15,
    name: "Last Night",
    dailycount: 11,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 16,
    name: "Current Night",
    dailycount: 116,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
  {
    id: 17,
    name: "ATOM",
    dailycount: 17,
    genre: { id: 3, name: "comedy" },

    likeState: false,
  },
  {
    id: 18,
    name: "Radio",
    dailycount: 122,
    genre: { id: 1, name: "action" },
    likeState: false,
  },
];

export function getMovies() {
  return List;
}
