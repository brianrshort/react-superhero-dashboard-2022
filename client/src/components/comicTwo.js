import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import crypto from "crypto-js";

import Arr from "./seeds/seeds";
import config from "./config/config";
import sample from "./seeds/sampleComicvine.json";

//import ComicDisplay from "./comicDisplay";

