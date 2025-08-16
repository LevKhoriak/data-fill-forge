export type Language = 'en' | 'ru';

export interface Translations {
  // Sidebar
  sidebar: {
    title: string;
    workflow: string;
    uploadFiles: string;
    dataPreview: string;
    templateSelection: string;
    editData: string;
    styling: string;
    export: string;
    demo: string;
  };
  // Common
  common: {
    language: string;
    english: string;
    russian: string;
    loading: string;
    save: string;
    cancel: string;
    delete: string;
    edit: string;
    add: string;
    search: string;
    filter: string;
    sort: string;
    actions: string;
    manageData: string;
    image: string;
  };
  // Pages
  pages: {
          upload: {
        title: string;
        description: string;
        dragAndDrop: string;
        selectFiles: string;
        supportedFormats: string;
        invalidFileType: string;
        uploadSVGFile: string;
        uploadCSVFile: string;
        SVGUploadSuccess: string;
        CSVUploadSuccess: string;
        svgTemplate: string;
        svgTemplateDesc: string;
        csvDataFile: string;
        csvDataFileDesc: string;
        dropSvgHere: string;
        dropCsvHere: string;
        browseFiles: string;
        previewNotAvailable: string;
        svgPreview: string;
        svgPreviewDesc: string;
        svgPreviewWillAppear: string;
        continueToPreview: string;
        continueToPreviewDisabled: string;
      };
    preview: {
      title: string;
      description: string;
      csvDataTable: string;
      csvDataTableDesc: string;
      totalRows: string;
      columnsDetected: string;
      backToUpload: string;
      continueToMapping: string;
      totalRecords: string;
      columns: string;
    };
    mapping: {
      title: string;
      description: string;
      sourceField: string;
      targetField: string;
      mappingType: string;
      recordSelection: string;
      recordSelectionDesc: string;
      chooseRecord: string;
      recordWillBeMapped: string;
      selectRecordToMap: string;
      backToDataPreview: string;
      continueToEditData: string;
    };
    edit: {
      title: string;
      description: string;
      row: string;
      column: string;
      value: string;
      editableDataTable: string;
      addRow: string;
      addColumn: string;
      editCellsDirectly: string;
      actions: string;
      changesAutoSaved: string;
      backToFieldMapping: string;
      continueToStyling: string;
    };
    styling: {
      title: string;
      description: string;
      theme: string;
      colors: string;
      fonts: string;
      stylingOptions: string;
      customizeBackgroundColors: string;
      backgroundColorControls: string;
      setRgbCmykColors: string;
      rgbColor: string;
      cmykColor: string;
      red: string;
      green: string;
      blue: string;
      cyan: string;
      magenta: string;
      yellow: string;
      black: string;
      colorsChosenApply: string;
      svgPreview: string;
      previewOutputFile: string;
      svgPreviewWillAppear: string;
      applyStylingChanges: string;
      refreshPreview: string;
      downloadSvg: string;
      backToEditData: string;
      continueToExport: string;
    };
    export: {
      title: string;
      description: string;
      format: string;
      filename: string;
      download: string;
      exportFinalDesign: string;
      generateFilledTemplates: string;
      exportSettings: string;
      configureExportOptions: string;
      outputFormat: string;
      selectFormat: string;
      generateFiles: string;
      willGenerateFinalDesign: string;
      exportSummary: string;
      reviewWhatWillBeExported: string;
      template: string;
      modelChosen: string;
      generatingFiles: string;
      processingRecord: string;
      backToStyling: string;
      startOver: string;
    };
  };
}

export const translations: Record<Language, Translations> = {
  en: {
    sidebar: {
      title: "SVG tool",
      workflow: "Workflow",
      uploadFiles: "Upload Files",
      dataPreview: "Data Preview",
      templateSelection: "Template Selection",
      editData: "Edit Data",
      styling: "Styling",
      export: "Export",
      demo: "Language Demo",
    },
    common: {
      language: "Language",
      english: "English",
      russian: "Russian",
      loading: "Loading...",
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      edit: "Edit",
      add: "Add",
      search: "Search",
      filter: "Filter",
      sort: "Sort",
      actions: "Actions",
      manageData: "Manage your data",
      image: "Image",
    },
    pages: {
      upload: {
        title: "Upload Files",
        description: "Upload your SVG template and CSV data file",
        dragAndDrop: "Drag and drop files here, or click to select",
        selectFiles: "Select Files",
        supportedFormats: "Supported formats: CSV, Excel, JSON",
        invalidFileType: "Invalid file type",
        uploadSVGFile: "Please upload an SVG file",
        uploadCSVFile: "Please upload a CSV file",
        SVGUploadSuccess: "SVG uploaded successfully",
        CSVUploadSuccess: "CSV uploaded successfully",
        svgTemplate: "SVG Template",
        svgTemplateDesc: "Upload your SVG template file that will be filled with data",
        csvDataFile: "CSV Data File",
        csvDataFileDesc: "Upload your CSV file containing the data to fill the template",
        dropSvgHere: "Drop your SVG file here",
        dropCsvHere: "Drop your CSV file here",
        browseFiles: "Browse Files",
        previewNotAvailable: "Preview not available",
        svgPreview: "SVG preview",
        svgPreviewDesc: "SVG preview (rendered via object URL)",
        svgPreviewWillAppear: "SVG preview will appear here",
        continueToPreview: "Continue to Data Preview",
        continueToPreviewDisabled: "Continue to Data Preview",
      },
      preview: {
        title: "Data Preview",
        description: "Review your uploaded CSV data",
        csvDataTable: "CSV Data Table",
        csvDataTableDesc: "Preview of your uploaded CSV data. Check that all fields are correctly parsed.",
        totalRows: "Total rows",
        columnsDetected: "Columns detected",
        backToUpload: "Back to Upload",
        continueToMapping: "Continue to Field Mapping",
        totalRecords: "Total Records",
        columns: "Columns",
      },
      mapping: {
        title: "Template Selection",
        description: "Select which record to fill in your SVG template",
        sourceField: "Source Field",
        targetField: "Target Field",
        mappingType: "Mapping Type",
        recordSelection: "Record Selection",
        recordSelectionDesc: "Choose which record should be filled in the SVG template.",
        chooseRecord: "Choose which record should be filled in the SVG template.",
        recordWillBeMapped: "This record will be mapped to the template.",
        selectRecordToMap: "Select this record to map it to the template.",
        backToDataPreview: "Back to Data Preview",
        continueToEditData: "Continue to Edit Data",
      },
      edit: {
        title: "Edit Data",
        description: "Modify your CSV data directly in the table",
        row: "Row",
        column: "Column",
        value: "Value",
        editableDataTable: "Editable Data Table",
        addRow: "Add Row",
        addColumn: "Add Column",
        editCellsDirectly: "Edit cells directly by clicking on them. Add or remove rows and columns as needed.",
        actions: "Actions",
        changesAutoSaved: "Changes are automatically saved. Use the buttons above to add/remove rows and columns.",
        backToFieldMapping: "Back to Field Mapping",
        continueToStyling: "Continue to Styling",
      },
      styling: {
        title: "Styling",
        description: "Customize the appearance of your exported data",
        theme: "Theme",
        colors: "Colors",
        fonts: "Fonts",
        stylingOptions: "Styling Options",
        customizeBackgroundColors: "Customize background colors for elements",
        backgroundColorControls: "Background Color Controls",
        setRgbCmykColors: "Set RGB or CMYK colors for the background of the template.",
        rgbColor: "RGB Color",
        cmykColor: "CMYK Color",
        red: "Red",
        green: "Green",
        blue: "Blue",
        cyan: "Cyan (%)",
        magenta: "Magenta (%)",
        yellow: "Yellow (%)",
        black: "Black (%)",
        colorsChosenApply: "The colors chosen will apply to the background of the output file.",
        svgPreview: "SVG Preview",
        previewOutputFile: "Preview your output file with the applied styling changes.",
        svgPreviewWillAppear: "SVG preview will appear here",
        applyStylingChanges: "Apply styling changes to see the preview update",
        refreshPreview: "Refresh Preview",
        downloadSvg: "Download SVG",
        backToEditData: "Back to Edit Data",
        continueToExport: "Continue to Export",
      },
      export: {
        title: "Export",
        description: "Download your processed data in various formats",
        format: "Format",
        filename: "Filename",
        download: "Download",
        exportFinalDesign: "Export final design",
        generateFilledTemplates: "Generate your filled templates",
        exportSettings: "Export Settings",
        configureExportOptions: "Configure your export options before generating the files.",
        outputFormat: "Output Format",
        selectFormat: "Select format",
        generateFiles: "Generate Files",
        willGenerateFinalDesign: "This will generate the final design file with the selected model information.",
        exportSummary: "Export Summary",
        reviewWhatWillBeExported: "Review what will be exported before proceeding.",
        template: "Template:",
        modelChosen: "Model chosen:",
        generatingFiles: "Generating files...",
        processingRecord: "Processing record",
        backToStyling: "Back to Styling",
        startOver: "Start Over",
      },
    },
  },
  ru: {
    sidebar: {
      title: "Инструмент SVG",
      workflow: "Рабочий процесс",
      uploadFiles: "Загрузить файлы",
      dataPreview: "Предварительный просмотр",
      templateSelection: "Выбор шаблона",
      editData: "Редактирование данных",
      styling: "Стилизация",
      export: "Экспорт",
      demo: "Демо языка",
    },
    common: {
      language: "Язык",
      english: "Английский",
      russian: "Русский",
      loading: "Загрузка...",
      save: "Сохранить",
      cancel: "Отмена",
      delete: "Удалить",
      edit: "Редактировать",
      add: "Добавить",
      search: "Поиск",
      filter: "Фильтр",
      sort: "Сортировка",
      actions: "Действия",
      manageData: "Управление данными",
      image: "Изображение",
    },
    pages: {
      upload: {
        title: "Загрузка файлов",
        description: "Загрузите SVG шаблон и CSV файл с данными",
        dragAndDrop: "Перетащите файлы сюда или нажмите для выбора",
        selectFiles: "Выбрать файлы",
        supportedFormats: "Поддерживаемые форматы: CSV, Excel, JSON",
        invalidFileType: "Неверный формат файла",
        uploadSVGFile: "Пожалуйста, загрузите SVG файл",
        uploadCSVFile: "Пожалуйста, загрузите CSV файл",
        SVGUploadSuccess: "SVG успешно загружен",
        CSVUploadSuccess: "CSV успешно загружен",
        svgTemplate: "SVG Шаблон",
        svgTemplateDesc: "Загрузите ваш SVG шаблон, который будет заполнен данными",
        csvDataFile: "CSV Файл с данными",
        csvDataFileDesc: "Загрузите ваш CSV файл, содержащий данные для заполнения шаблона",
        dropSvgHere: "Перетащите SVG файл сюда",
        dropCsvHere: "Перетащите CSV файл сюда",
        browseFiles: "Выбрать файлы",
        previewNotAvailable: "Предварительный просмотр недоступен",
        svgPreview: "Предварительный просмотр SVG",
        svgPreviewDesc: "Предварительный просмотр SVG (отображается через object URL)",
        svgPreviewWillAppear: "Предварительный просмотр SVG появится здесь",
        continueToPreview: "Перейти к предварительному просмотру",
        continueToPreviewDisabled: "Перейти к предварительному просмотру",
      },
      preview: {
        title: "Предварительный просмотр",
        description: "Просмотрите загруженные CSV данные",
        csvDataTable: "Таблица CSV данных",
        csvDataTableDesc: "Предварительный просмотр загруженных CSV данных. Проверьте, что все поля правильно разобраны.",
        totalRows: "Всего строк",
        columnsDetected: "Обнаружено колонок",
        backToUpload: "Назад к загрузке",
        continueToMapping: "Перейти к сопоставлению полей",
        totalRecords: "Всего записей",
        columns: "Колонки",
      },
      mapping: {
        title: "Выбор шаблона",
        description: "Выберите, какую запись заполнить в SVG шаблоне",
        sourceField: "Исходное поле",
        targetField: "Целевое поле",
        mappingType: "Тип сопоставления",
        recordSelection: "Выбор записи",
        recordSelectionDesc: "Выберите, какую запись следует заполнить в SVG шаблоне.",
        chooseRecord: "Выберите, какую запись следует заполнить в SVG шаблоне.",
        recordWillBeMapped: "Эта запись будет сопоставлена с шаблоном.",
        selectRecordToMap: "Выберите эту запись для сопоставления с шаблоном.",
        backToDataPreview: "Назад к предварительному просмотру",
        continueToEditData: "Перейти к редактированию данных",
      },
      edit: {
        title: "Редактирование данных",
        description: "Изменяйте ваши CSV данные прямо в таблице",
        row: "Строка",
        column: "Колонка",
        value: "Значение",
        editableDataTable: "Редактируемая таблица данных",
        addRow: "Добавить строку",
        addColumn: "Добавить колонку",
        editCellsDirectly: "Редактируйте ячейки, нажимая на них. Добавляйте или удаляйте строки и колонки по необходимости.",
        actions: "Действия",
        changesAutoSaved: "Изменения автоматически сохраняются. Используйте кнопки выше для добавления/удаления строк и колонок.",
        backToFieldMapping: "Назад к сопоставлению полей",
        continueToStyling: "Перейти к стилизации",
      },
      styling: {
        title: "Стилизация",
        description: "Настройте внешний вид экспортируемых данных",
        theme: "Тема",
        colors: "Цвета",
        fonts: "Шрифты",
        stylingOptions: "Опции стилизации",
        customizeBackgroundColors: "Настройте цвета фона для элементов",
        backgroundColorControls: "Управление цветом фона",
        setRgbCmykColors: "Установите RGB или CMYK цвета для фона шаблона.",
        rgbColor: "RGB Цвет",
        cmykColor: "CMYK Цвет",
        red: "Красный",
        green: "Зеленый",
        blue: "Синий",
        cyan: "Голубой (%)",
        magenta: "Пурпурный (%)",
        yellow: "Желтый (%)",
        black: "Черный (%)",
        colorsChosenApply: "Выбранные цвета будут применены к фону выходного файла.",
        svgPreview: "Предварительный просмотр SVG",
        previewOutputFile: "Предварительный просмотр выходного файла с примененными изменениями стиля.",
        svgPreviewWillAppear: "Предварительный просмотр SVG появится здесь",
        applyStylingChanges: "Примените изменения стиля, чтобы увидеть обновление предварительного просмотра",
        refreshPreview: "Обновить предварительный просмотр",
        downloadSvg: "Скачать SVG",
        backToEditData: "Назад к редактированию данных",
        continueToExport: "Перейти к экспорту",
      },
      export: {
        title: "Экспорт",
        description: "Скачайте обработанные данные в различных форматах",
        format: "Формат",
        filename: "Имя файла",
        download: "Скачать",
        exportFinalDesign: "Экспорт финального дизайна",
        generateFilledTemplates: "Создайте заполненные шаблоны",
        exportSettings: "Настройки экспорта",
        configureExportOptions: "Настройте параметры экспорта перед созданием файлов.",
        outputFormat: "Выходной формат",
        selectFormat: "Выбрать формат",
        generateFiles: "Создать файлы",
        willGenerateFinalDesign: "Это создаст финальный файл дизайна с выбранной информацией модели.",
        exportSummary: "Сводка экспорта",
        reviewWhatWillBeExported: "Просмотрите, что будет экспортировано, прежде чем продолжить.",
        template: "Шаблон:",
        modelChosen: "Выбранная модель:",
        generatingFiles: "Создание файлов...",
        processingRecord: "Обработка записи",
        backToStyling: "Назад к стилизации",
        startOver: "Начать заново",
      },
    },
  },
};

export const getTranslation = (language: Language, key: string): string => {
  const keys = key.split('.');
  let value: any = translations[language];
  
  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return key; // Return key if translation not found
    }
  }
  
  return typeof value === 'string' ? value : key;
};
