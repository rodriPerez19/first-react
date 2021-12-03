import React from "react";

import UserMoks from "../mocks/user_mock"

import maped from "../callbacks/map_callback"

export default function ListUser(){
    return (
        <div>
            {UserMoks.map(maped)}
        </div>
    );
}