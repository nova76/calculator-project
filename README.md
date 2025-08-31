# Calculator Project

A modern, responsive web-based calculator built with HTML, CSS, and JavaScript. Features a clean interface with basic arithmetic operations and a Node.js Express server backend.

![Calculator Screenshot](https://via.placeholder.com/400x500/f0f0f0/333333?text=Calculator+App)

## Features

- ✅ Basic arithmetic operations (addition, subtraction, multiplication, division)
- ✅ Clean and responsive user interface
- ✅ Input validation and error handling
- ✅ Division by zero protection
- ✅ Keyboard support (Enter key for calculation)
- ✅ Real-time result display
- ✅ Express.js API endpoints for server-side calculations
- ✅ Mobile-friendly design

## Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Styling**: Pure CSS with modern responsive design
- **Package Manager**: npm

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/calculator-project.git
   cd calculator-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm start
   ```

4. **Open your browser and navigate to:**
   ```
   http://localhost:3000
   ```

## Usage

### Basic Operations

1. Enter your first number in the "Első szám" field
2. Enter your second number in the "Második szám" field
3. Click one of the operation buttons:
   - `+` for addition
   - `-` for subtraction
   - `×` for multiplication
   - `÷` for division
4. The result will be displayed below the buttons
5. Use the "Törlés" button to clear all inputs and results

### Keyboard Shortcuts

- **Enter**: Performs addition operation
- **Tab**: Navigate between input fields

### API Endpoints

The calculator also provides a REST API for server-side calculations:

```bash
POST /api/calculate
Content-Type: application/json

{
  "num1": 10,
  "num2": 5,
  "operation": "add"
}
```

**Response:**
```json
{
  "result": 15
}
```

**Supported operations:**
- `"add"` - Addition
- `"subtract"` - Subtraction
- `"multiply"` - Multiplication
- `"divide"` - Division

## Project Structure

```
calculator-project/
├── index.html          # Main HTML file with calculator UI
├── server.js           # Express.js server
├── package.json        # Project configuration and dependencies
├── package-lock.json   # Dependency lock file
├── .gitignore         # Git ignore rules
└── README.md          # This file
```

## Error Handling

The calculator includes comprehensive error handling:

- **Empty inputs**: Displays "Kérlek adj meg mindkét számot!"
- **Division by zero**: Shows "Nullával nem lehet osztani!"
- **Invalid operations**: Returns "Érvénytelen művelet!"
- **API errors**: Returns appropriate HTTP status codes with error messages

## Development

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm start

# The server will restart automatically when files change
```

### Testing

To test the API endpoints, you can use curl:

```bash
# Test addition
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"num1": 10, "num2": 5, "operation": "add"}'

# Test division
curl -X POST http://localhost:3000/api/calculate \
  -H "Content-Type: application/json" \
  -d '{"num1": 10, "num2": 2, "operation": "divide"}'
```

## Deployment

### Local Deployment

```bash
npm start
```

### Production Deployment

1. Set the PORT environment variable:
   ```bash
   export PORT=8080
   ```

2. Start the application:
   ```bash
   npm start
   ```

### Docker Deployment

```dockerfile
FROM node:16-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Make your changes and commit: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

## License

This project is licensed under the MIT License - see the [LICENSE](#license) section below.

---

## License

MIT License

Copyright (c) 2025 Calculator Project

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
