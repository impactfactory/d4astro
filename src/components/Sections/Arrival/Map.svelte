<script lang="ts">
    export let org: any[];

</script>

<iframe
  title="Google Map"
  width="100%"
  height="500"
  frameborder="0"
  scrolling="no"
  marginheight="0"
  marginwidth="0"
  src="https://maps.google.com/maps?&q='{encodeURI(org.street)}+{org.no}+{org.zip}+{encodeURI(org.city)}+{encodeURI(org.country)})+'&output=embed">
</iframe>
