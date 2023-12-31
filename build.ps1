ls -Path "docs" -Recurse | foreach { $_.Delete()}
Copy-Item -Force -Recurse -Verbose "src\*" -Destination "docs"
cd docs
ls -include *.html -Recurse | ForEach-Object { ( Get-Content -Path $_.FullName ) -replace '<<header>>', '
<nav class="navbar navbar-expand-lg navbar-light bg-light" >
    <a href="https://think4change.org" style="margin-right: 30px"> <img src="https://think4change.org/graphics/logo.png" height="45" alt="think4change.org"></a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent" >
      <ul class="navbar-nav mr-auto "  style="text-align: center">
        <li class="nav-item dropdown " >
          <a id="menu-math1" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Math 1
          </a>
          <div class="dropdown-menu"  aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://think4change.org/content/math-1/algebra">Algebra</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-1/functions">Functions</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-1/sysofeqs">Systems of Equations/Inequalities</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-1/expfunctions">Exponential Growth and Decay</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-1/stats+probability">Statistics and Probability</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-1/quadratics+factoring">Quadratics and Factoring</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a id="menu-math2" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Math 2
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://think4change.org/content/math-2/completesquare">Completing the Square/Complex Numbers</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/radicals">Radicals</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/trianglecongruence">Triangle Congruence</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/angletheorems">Angle Theorems</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/trig">Trigonometry</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/twocolumnproofs">Two Column Proofs</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/stats">Statistics</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/transformations">Transformations</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-2/projectilemotion">Projectile Motion</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a id="menu-math3" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Math 3
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://think4change.org/content/math-3/polynomials">Polynomials</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/rationalfuncs">Rational Functions</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/optimization">Optimization</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/quadrilateraltheorems">Quadrilateral Theorems</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/radians">Radians</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/imaginarynumbers">Imaginary Numbers</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/trig">Trignometry</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/stats">Statistics</a>
            <a class="dropdown-item" href="https://think4change.org/content/math-3/circletheorems">Circle Theorems</a>

          </div>
        </li>
        <li class="nav-item dropdown">
          <a id="menu-preCalc" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Pre Calculus
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/vectors">Vectors</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/series+sequences">Series/Sequences</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/conics">Conics</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/rationalfuncs">Rational Functions</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/trigapps">Trig Applications</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/solvingtrig">Solving Trig Equations</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/limits+continuity">Limits/Continuity</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/parametrics+polar">Parametrics/Polar</a>
            <a class="dropdown-item" href="https://think4change.org/content/pre-calculus/analytictrig">Analytic Trignometry</a>
          </div>
        <li class="nav-item dropdown">
          <a id="menu-calculus" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            AP Calculus
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/limits+continuity">Limits/Continuity</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/basicdifferentiation">Basic Differentiation</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/advanceddifferentiation">Advanced Differentiation Techniques</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/appsofderivatives">Applications of Derivatives</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/diffequations">Differential Equations</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/advancedintegration">Advanced Integration Techniques</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/parametrics+polar">Parametrics/Polar</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/infiniteseries">Infinite Series</a>
            <a class="dropdown-item" href="https://think4change.org/content/ap-calculus/power+taylorseries">Power and Taylor Series</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a id="menu-more" class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            More
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="https://think4change.org/about">About Us</a>
            <a class="dropdown-item" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLScIMpk_RbYf0b-DJwVyNQLhbZlmV-ZFNpKQgFxeoBEZxDLI3Q/viewform?usp=sf_link">Submit a Question</a>
            <a class="dropdown-item" href="https://think4change.org/specialevents">Special Events</a>
          </div>
        </li>
      </ul>

  </nav>' | Set-Content $_.fullname }

ls -include *.html -Recurse | ForEach-Object { ( Get-Content -Path $_.FullName ) -replace '<<footer>>', '
<footer style="background-color: black;" class="page-footer font-small blue pt-4">

      <div class="container-fluid text-center text-md-left">

        <div class="row">

          <div class="col-md-6 mt-md-0 mt-3">

            <h5 class="text-uppercase">Think4Change</h5>
            <p style="color: #0096c7;" class="footer-minitext">put something here soon.</p>

          </div>

          <hr class="clearfix w-100 d-md-none pb-3">

          <div class="col-md-3 mb-md-0 mb-3">

            <h5 class="text-uppercase">Links</h5>

            <ul class="list-unstyled">
              <li>
                <a href="#!" style="color: #0096c7;" >Submit A Question</a>
              </li>
              <li>
                <a style="color: #0096c7;" href="https://think4change.org/table-of-contents">Classes Overview</a>
              </li>
              <li>
                <a style="color: #0096c7;" href="https://think4change.org/specialevents">Special Events</a>
              </li>
              <li>
                Icons provided by Font Awesome.<br><a style="color: #0096c7;" href="https://fontawesome.com/license">Link to Pro License</a>
              </li>
            </ul>

          </div>
          <div class="col-md-3 mb-md-0 mb-3">

            <h5 style="color: #023e8a;" class="text-uppercase">Socials</h5>

            <ul class="list-unstyled">
              <li>
                <a style="color: #0096c7;" href="https://www.instagram.com/officialt4c/">Instagram</a>
              </li>
              <li>
                <a style="color: #0096c7;" href="mailto:officialt4c@gmail.com">Email us</a>
              </li>
              <li>
                <a style="color: #0096c7;" href="https://twitter.com/officialt4c">Twitter</a>
              </li>
              <li>
                <a style="color: #0096c7;" href="https://www.youtube.com/channel/UCOQtOvZGzU2nWKl29f_IjEw">YouTube</a>
              </li>
            </ul>

          </div>

        </div>

      </div>

      <div class="footer-copyright text-center py-3">© 2020 Copyright:
        <a style="color: #0096c7;" href="https://think4change.org">think4change.org</a>
      </div>
    </footer>
' | Set-Content $_.fullname }