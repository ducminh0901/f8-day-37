import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import EditAvatar from "./pages/EditAvatar";
import {
    DemoTextInput,
    DemoNewInput,
    ClickCounterButton,
} from "./pages/UseRef";
import ReactMemo from "./pages/ReactMemo";

function App() {
    return (
        <Router>
            <div style={{ padding: 20 }}>
                <h2>Bài tập React Day 37</h2>

                <ul style={{ display: "flex", gap: 20 }}>
                    <li>
                        <Link to="/">Edit Avatar</Link>
                    </li>
                    <li>
                        <Link to="/counter">Click Counter</Link>
                    </li>
                    <li>
                        <Link to="/text-input">TextInput</Link>
                    </li>
                    <li>
                        <Link to="/new-input">NewTextInput</Link>
                    </li>
                    <li>
                        <Link to="/react-memo">React Memo</Link>
                    </li>
                </ul>
            </div>

            <Routes>
                <Route index element={<EditAvatar />} />

                <Route path="/text-input" element={<DemoTextInput />} />
                <Route path="/new-input" element={<DemoNewInput />} />
                <Route path="/counter" element={<ClickCounterButton />} />
                <Route path="/react-memo" element={<ReactMemo />} />
            </Routes>
        </Router>
    );
}

export default App;
