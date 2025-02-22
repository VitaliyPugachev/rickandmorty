const path = require('path');
const fs = require('fs');

const iconsDir = path.resolve(__dirname, '../assets/icons');

const updateSvgFiles = (dir) => {
  fs.readFile(dir, 'utf8', (err, data) => {
    if (err) {
      console.log('Error', err)
    }

    const tagRegex = /<svg[^>]*>/;
    const propsRegex = /(width|height|fill|stroke)=".*?"/g;

    const mainTag = data.match(tagRegex)[0];
    const updatedTag = mainTag.replaceAll(propsRegex, '');

    if (!mainTag || !updatedTag) {
      return;
    }

    const updatedData = data.replace(mainTag, updatedTag);

    fs.writeFile(dir, updatedData, (err) => {
      if (err) {
        console.log(err)
      }
    })
  });
}

function processSvgFiles(dir) {
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(`Ошибка чтения директории ${dir}:`, err);
      return;
    }

    files.forEach(file => {
      const filePath = path.join(dir, file);
      if (fs.statSync(filePath).isDirectory()) {
        // Рекурсивно обрабатываем поддиректории
        processSvgFiles(filePath);
      } else if (path.extname(file) === '.svg') {
        // Обрабатываем только SVG файлы
        updateSvgFiles(filePath);
      }
    });
  });

  console.log('Файлы преобразованы');
}

processSvgFiles(iconsDir);
