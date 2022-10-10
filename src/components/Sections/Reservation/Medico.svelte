<script lang="ts">
    import { onMount } from 'svelte';

    //import the remote script here https://www.medicosearch.ch/widget/api/js?key=366e01fb-b00a-496a-a30b-cba9623eb737&version=2.0.0&container=%23medicosearchWidget&lang=de"
    //import MedicoScript from 'https://www.medicosearch.ch/widget/api/js?key=366e01fb-b00a-496a-a30b-cba9623eb737&version=2.0.0&container=%23medicosearchWidget&lang=de';

    const start = onMount(() => { function dynamicallyLoadScript(url) {
    var script = document.createElement("script");  // create a script DOM node
    script.src = 'https://www.medicosearch.ch/widget/api/js?key=366e01fb-b00a-496a-a30b-cba9623eb737&version=2.0.0&container=%23medicosearchWidget&lang=de';  // set its src to the provided URL
   
    document.body.appendChild(script);
    }
});

</script>

<div class="medicosearch-widget">
    <div id="medicosearchWidget"></div>
    <!-- hier wäre sonst der script tag, der das medicosearch script importiert und ausführt -->
 </div>