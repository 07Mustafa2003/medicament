<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="csrf-token" content="{{ csrf_token() }}">
  <title>Pharmacy</title>
  <link href="{{ mix('css/app.css') }}" rel="stylesheet">
</head>
<body>
  <div id="app"></div>
  <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
